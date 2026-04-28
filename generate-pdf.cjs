const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

(async () => {
  try {
    const browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    const page = await browser.newPage();
    
    // URL du CV sur le serveur Vite (doit être en cours d'exécution)
    const cvUrl = 'http://localhost:5173/cv.html';
    
    console.log('📄 Chargement du CV depuis:', cvUrl);
    await page.goto(cvUrl, { waitUntil: 'networkidle2' });
    
    // Masquer le bouton d'impression
    await page.evaluate(() => {
      const btn = document.querySelector('.no-print');
      if (btn) btn.style.display = 'none';
    });
    
    const pdfPath = path.join(__dirname, 'public', 'cv.pdf');
    
    // Générer le PDF
    await page.pdf({
      path: pdfPath,
      format: 'A4',
      margin: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      },
      printBackground: true,
      scale: 1
    });
    
    await browser.close();
    
    console.log('✅ PDF généré avec succès:', pdfPath);
    console.log('📊 Taille:', fs.statSync(pdfPath).size, 'bytes');
    
  } catch (error) {
    console.error('❌ Erreur:', error.message);
    process.exit(1);
  }
})();
