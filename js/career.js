document.getElementById('portfolioUpload').addEventListener('click', () => {
  document.getElementById('portfolioFile').click();
});

const fileInput = document.getElementById('portfolioFile');
const fileList = document.getElementById('fileList');

fileInput.addEventListener('change', () => {
  fileList.innerHTML = '';
  [...fileInput.files].forEach(file => {
    const li = document.createElement('div');
    li.textContent = file.name;
    fileList.appendChild(li);
  });
});
