const fs = require('fs');
const path = require('path');

// Path to your folder containing HTML files
const folderPath = path.join(__dirname);

// Filter only HTML files (exclude index.html itself)
const pages = fs.readdirSync(folderPath)
  .filter(file => file.endsWith('.html') && file !== 'index.html');

// Generate HTML content
const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>France Tours</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 40px; }
        h1 { text-align: center; }
        ul { list-style-type: none; padding: 0; }
        li { margin: 10px 0; }
        a { text-decoration: none; color: #0077cc; }
        a:hover { text-decoration: underline; }
    </style>
</head>
<body>
    <h1>France Tours</h1>
    <ul>
        ${pages.map(p => {
            const displayName = p.replace('.html', '').replace(/-/g, ' ');
            return `<li><a href="${p}">${displayName}</a></li>`;
        }).join('\n')}
    </ul>
</body>
</html>
`;

// Write to index.html
fs.writeFileSync(path.join(folderPath, 'index.html'), htmlContent);

console.log('index.html generated successfully!');
