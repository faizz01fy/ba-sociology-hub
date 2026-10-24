(async () => {
  console.log("%c🚀 Starting NoteSphere Semester 1 Complete Spider...", "color: #38bdf8; font-size: 16px; font-weight: bold;");
  
  const blobToBase64 = blob => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result.split(',')[1]);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });

  // 1. Discover all subjects from DOM or fallback to known Semester 1 subjects
  let subjects = [];
  const seenUrls = new Set();
  
  const subjectCards = Array.from(document.querySelectorAll('a[href*="/dashboard/subjects/"]'));
  for (const a of subjectCards) {
    const url = a.href;
    if (!seenUrls.has(url)) {
      seenUrls.add(url);
      const text = a.innerText.trim().split('\n')[0] || a.querySelector('img')?.alt || 'Subject';
      subjects.push({ name: text.replace(/[\\/*?:"<>|]/g, '_').trim(), url });
    }
  }

  // Fallback to all Semester 1 subjects
  if (subjects.length === 0) {
    subjects = [
      { name: "Microeconomic Foundation", url: "https://notesphere-4rlw.onrender.com/dashboard/subjects/33/" },
      { name: "MATHEMATICS", url: "https://notesphere-4rlw.onrender.com/dashboard/subjects/29/" },
      { name: "Philosophy of Artificial Intelligence", url: "https://notesphere-4rlw.onrender.com/dashboard/subjects/30/" },
      { name: "Sociology of Education", url: "https://notesphere-4rlw.onrender.com/dashboard/subjects/27/" },
      { name: "ARABIC", url: "https://notesphere-4rlw.onrender.com/dashboard/subjects/31/" },
      { name: "Philosophy of Education", url: "https://notesphere-4rlw.onrender.com/dashboard/subjects/4/" },
      { name: "Development Issues in Indian Economy", url: "https://notesphere-4rlw.onrender.com/dashboard/subjects/23/" },
      { name: "English Language Skills", url: "https://notesphere-4rlw.onrender.com/dashboard/subjects/22/" }
    ];
  }

  console.log(`%cFound ${subjects.length} subjects in Semester 1!`, "color: #a6e3a1; font-weight: bold; font-size: 14px;");
  let totalDownloaded = 0;

  for (let i = 0; i < subjects.length; i++) {
    const subj = subjects[i];
    console.log(`\n%c[${i + 1}/${subjects.length}] Scanning Subject: ${subj.name}...`, "color: #f9e2af; font-weight: bold; font-size: 14px;");

    try {
      const resp = await fetch(subj.url);
      const html = await resp.text();
      const doc = new DOMParser().parseFromString(html, 'text/html');

      const downloadMap = new Map();

      // Find all download buttons and extract best title
      for (const a of doc.querySelectorAll('a[href*="/download/"], a[href*=".pdf"]')) {
        const fullUrl = new URL(a.getAttribute('href'), subj.url).href;
        const card = a.closest('.chapter-card, .card, li, div') || a.parentElement;
        let title = card?.querySelector('h1, h2, h3, h4, h5, .title, .font-semibold, .font-bold')?.innerText?.trim() || '';
        
        // Extract chapter ID if available
        const chMatch = fullUrl.match(/\/chapters\/(\d+)\//);
        const chId = chMatch ? `Chapter_${chMatch[1]}` : 'Doc';

        if (!title || title.toLowerCase() === 'download') {
          title = chId;
        }

        if (!downloadMap.has(fullUrl)) {
          downloadMap.set(fullUrl, title.replace(/[\\/*?:"<>|]/g, '_').trim());
        }
      }

      // Regex fallback to ensure no chapter downloads are missed
      const regexMatches = [...html.matchAll(/\/dashboard\/chapters\/(\d+)\/download\//g)];
      for (const m of regexMatches) {
        const fullUrl = new URL(m[0], subj.url).href;
        if (!downloadMap.has(fullUrl)) {
          downloadMap.set(fullUrl, `Chapter_${m[1]}`);
        }
      }

      console.log(`   Found ${downloadMap.size} PDFs in ${subj.name}. Starting download...`);

      let cIdx = 1;
      for (const [pdfUrl, title] of downloadMap.entries()) {
        try {
          console.log(`   ⏳ (${cIdx}/${downloadMap.size}) Fetching: ${title}...`);
          const pdfResp = await fetch(pdfUrl);
          if (!pdfResp.ok) {
            console.warn(`   ⚠️ Status ${pdfResp.status} for ${pdfUrl}`);
            continue;
          }
          const blob = await pdfResp.blob();
          const base64Data = await blobToBase64(blob);

          // Send to local Python receiver with smart naming
          try {
            await fetch('http://127.0.0.1:8765/save', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                subject: subj.name,
                filename: `${title}.pdf`,
                data: base64Data
              })
            });
            console.log(`   ✅ Saved: ${title}.pdf`);
          } catch (netErr) {
            // Browser download fallback
            const dl = document.createElement('a');
            dl.href = URL.createObjectURL(blob);
            dl.download = `${subj.name} - ${title}.pdf`;
            document.body.appendChild(dl);
            dl.click();
            document.body.removeChild(dl);
            console.log(`   ✅ Downloaded via browser: ${title}.pdf`);
          }
          totalDownloaded++;
          cIdx++;
        } catch (err) {
          console.error(`   ❌ Failed: ${title}`, err);
        }
      }
    } catch (err) {
      console.error(`❌ Error on ${subj.name}:`, err);
    }
  }

  console.log(`\n%c🎉 ALL COMPLETED! Successfully crawled and downloaded ${totalDownloaded} PDFs into your Desktop "PDF materials" folder!`, "color: #a6e3a1; font-size: 16px; font-weight: bold;");
})();
