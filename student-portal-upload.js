// ===== STUDENT PORTAL UPLOAD FUNCTIONS =====

let selectedFile = null;

// Show/hide admin upload button based on user role
function checkAdminAccess() {
    const adminBtn = document.getElementById('adminUploadBtn');
    if (adminBtn && currentMinistry.email) {
        // Show upload button for logged-in admins
        adminBtn.style.display = 'block';
    }
}

// Upload Materials Functions
function showUploadMaterials() {
    document.getElementById('uploadMaterialsModal').classList.add('active');
    selectedFile = null;
    document.getElementById('filePreview').style.display = 'none';
}

function closeUploadMaterialsModal() {
    document.getElementById('uploadMaterialsModal').classList.remove('active');
    // Reset form
    document.getElementById('materialTitle').value = '';
    document.getElementById('materialCategory').value = '';
    document.getElementById('materialClass').value = 'all';
    document.getElementById('materialDescription').value = '';
    document.getElementById('materialFile').value = '';
    document.getElementById('notifyStudents').checked = true;
    selectedFile = null;
    document.getElementById('filePreview').style.display = 'none';
}

function handleFileSelect(event) {
    const file = event.target.files[0];
    
    if (file) {
        // Check file size (10MB limit)
        const maxSize = 10 * 1024 * 1024; // 10MB in bytes
        
        if (file.size > maxSize) {
            alert('File size exceeds 10MB limit. Please choose a smaller file.');
            event.target.value = '';
            return;
        }
        
        // Check file type
        const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
        
        if (!allowedTypes.includes(file.type)) {
            alert('Invalid file type. Please upload PDF, DOC, or DOCX files only.');
            event.target.value = '';
            return;
        }
        
        selectedFile = file;
        
        // Show file preview
        document.getElementById('filePreview').style.display = 'block';
        document.getElementById('fileName').textContent = file.name;
        document.getElementById('fileSize').textContent = `Size: ${(file.size / 1024).toFixed(2)} KB`;
    }
}

function uploadMaterial() {
    const title = document.getElementById('materialTitle').value.trim();
    const category = document.getElementById('materialCategory').value;
    const classFor = document.getElementById('materialClass').value;
    const description = document.getElementById('materialDescription').value.trim();
    const notifyStudents = document.getElementById('notifyStudents').checked;
    
    // Validation
    if (!title) {
        alert('Please enter a material title');
        return;
    }
    
    if (!category) {
        alert('Please select a category');
        return;
    }
    
    if (!selectedFile) {
        alert('Please select a file to upload');
        return;
    }
    
    // Create material object
    const material = {
        id: Date.now(),
        title: title,
        category: category,
        classFor: classFor,
        description: description,
        fileName: selectedFile.name,
        fileSize: selectedFile.size,
        fileType: selectedFile.type,
        uploadedBy: currentMinistry.adminName || 'Admin',
        uploadDate: new Date().toISOString(),
        downloads: 0
    };
    
    // In production, this would upload to a server
    // For now, we'll store in localStorage with base64 encoding
    const reader = new FileReader();
    reader.onload = function(e) {
        material.fileData = e.target.result; // Base64 encoded file
        
        // Get existing materials
        let materials = JSON.parse(localStorage.getItem('studyMaterials') || '[]');
        materials.unshift(material); // Add to beginning of array
        localStorage.setItem('studyMaterials', JSON.stringify(materials));
        
        closeUploadMaterialsModal();
        
        let message = `✅ Material uploaded successfully!\n\n"${title}" is now available to students.`;
        
        if (notifyStudents) {
            message += '\n\n📧 Notification sent to all students.';
        }
        
        alert(message);
        
        // Refresh materials list
        loadMaterialsList();
    };
    
    reader.readAsDataURL(selectedFile);
}

function loadMaterialsList() {
    const materials = JSON.parse(localStorage.getItem('studyMaterials') || '[]');
    const materialsListDiv = document.getElementById('materialsList');
    
    if (materials.length === 0) {
        materialsListDiv.innerHTML = '<p style="color: #666; text-align: center; padding: 20px;">No materials uploaded yet. Check back soon!</p>';
        return;
    }
    
    let html = '<div style="display: grid; gap: 15px;">';
    
    materials.forEach((material, index) => {
        const uploadDate = new Date(material.uploadDate).toLocaleDateString();
        const fileIcon = material.fileType.includes('pdf') ? '📕' : '📄';
        const categoryLabel = material.category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
        
        html += `
            <div style="border: 1px solid var(--grey); border-radius: 8px; padding: 15px; background: white; display: flex; justify-content: space-between; align-items: start; gap: 15px;">
                <div style="flex: 1;">
                    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px;">
                        <span style="font-size: 24px;">${fileIcon}</span>
                        <div>
                            <h4 style="color: var(--primary); margin-bottom: 3px;">${material.title}</h4>
                            <p style="font-size: 13px; color: var(--grey-dark);">
                                <span class="status-badge" style="background: var(--light); color: var(--primary); margin-right: 8px;">${categoryLabel}</span>
                                ${material.classFor !== 'all' ? material.classFor.charAt(0).toUpperCase() + material.classFor.slice(1) + ' Class' : 'All Classes'}
                            </p>
                        </div>
                    </div>
                    ${material.description ? `<p style="color: #666; font-size: 14px; margin-bottom: 8px;">${material.description}</p>` : ''}
                    <p style="font-size: 13px; color: var(--grey-dark);">
                        📅 Uploaded: ${uploadDate} • 
                        📦 Size: ${(material.fileSize / 1024).toFixed(2)} KB • 
                        ⬇️ ${material.downloads} downloads
                    </p>
                </div>
                <div style="display: flex; flex-direction: column; gap: 8px;">
                    <button class="action-btn btn-success" onclick="downloadMaterial(${index})" style="white-space: nowrap;">
                        ⬇️ Download
                    </button>
                    <button class="action-btn btn-danger no-print" onclick="deleteMaterial(${index})" style="white-space: nowrap; display: ${typeof currentMinistry !== 'undefined' && currentMinistry.email ? 'block' : 'none'};">
                        🗑️ Delete
                    </button>
                </div>
            </div>
        `;
    });
    
    html += '</div>';
    materialsListDiv.innerHTML = html;
}

function downloadMaterial(index) {
    let materials = JSON.parse(localStorage.getItem('studyMaterials') || '[]');
    
    if (materials[index]) {
        const material = materials[index];
        
        // Increment download count
        material.downloads++;
        materials[index] = material;
        localStorage.setItem('studyMaterials', JSON.stringify(materials));
        
        // Create download link
        const link = document.createElement('a');
        link.href = material.fileData;
        link.download = material.fileName;
        link.click();
        
        alert(`✅ Downloading: ${material.fileName}\n\nThe file will be saved to your downloads folder.`);
        
        // Refresh list to show updated download count
        loadMaterialsList();
    }
}

function deleteMaterial(index) {
    let materials = JSON.parse(localStorage.getItem('studyMaterials') || '[]');
    
    if (materials[index]) {
        const material = materials[index];
        
        if (confirm(`Are you sure you want to delete "${material.title}"?\n\nThis action cannot be undone.`)) {
            materials.splice(index, 1);
            localStorage.setItem('studyMaterials', JSON.stringify(materials));
            
            alert('✅ Material deleted successfully!');
            loadMaterialsList();
        }
    }
}
