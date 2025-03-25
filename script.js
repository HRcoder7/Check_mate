 // Variable to keep track of the current chapter list
let currentChapterId = null;

function showSubsections(sectionId) {
    // Hide the sections
    document.getElementById('sections').style.display = 'none';

    // Hide all subsections
    const subsectionLists = document.getElementsByClassName('subsection-list');
    for (let i = 0; i < subsectionLists.length; i++) {
        subsectionLists[i].style.display = 'none';
    }

    // Hide all chapter lists
    const chapterLists = document.getElementsByClassName('chapter-list');
    for (let i = 0; i < chapterLists.length; i++) {
        chapterLists[i].style.display = 'none';
    }

    // Hide the PDF viewer
    document.getElementById('pdf-viewer').style.display = 'none';

    // Show the selected subsection list
    document.getElementById(sectionId + '-subsections').style.display = 'block';
}

function showChapters(chapterId) {
    // Store the current chapter ID
    currentChapterId = chapterId;

    // Hide all subsections
    const subsectionLists = document.getElementsByClassName('subsection-list');
    for (let i = 0; i < subsectionLists.length; i++) {
        subsectionLists[i].style.display = 'none';
    }

    // Hide all chapter lists
    const chapterLists = document.getElementsByClassName('chapter-list');
    for (let i = 0; i < chapterLists.length; i++) {
        chapterLists[i].style.display = 'none';
    }

    // Hide the PDF viewer
    document.getElementById('pdf-viewer').style.display = 'none';

    // Show the selected chapter list
    document.getElementById(chapterId).style.display = 'block';

    // Add click event listeners to chapter links
    const chapterLinks = document.querySelectorAll(`#${chapterId} .chapter-link`);
    chapterLinks.forEach(link => {
        // Remove existing event listeners to prevent duplicates
        link.removeEventListener('click', handleChapterLinkClick);
        link.addEventListener('click', handleChapterLinkClick);
    });
}

function handleChapterLinkClick(e) {
    e.preventDefault(); // Prevent default link behavior
    const pdfUrl = this.getAttribute('href');
    showPdfViewer(pdfUrl);
}

function showPdfViewer(pdfUrl) {
    // Hide all chapter lists
    const chapterLists = document.getElementsByClassName('chapter-list');
    for (let i = 0; i < chapterLists.length; i++) {
        chapterLists[i].style.display = 'none';
    }

    // Show the PDF viewer
    const pdfViewer = document.getElementById('pdf-viewer');
    const pdfIframe = document.getElementById('pdf-iframe');
    pdfViewer.style.display = 'block';
    pdfIframe.src = pdfUrl;
}

function closePdfViewer() {
    // Hide the PDF viewer
    document.getElementById('pdf-viewer').style.display = 'none';

    // Show the current chapter list
    if (currentChapterId) {
        document.getElementById(currentChapterId).style.display = 'block';
    }
}

function goBackToSections() {
    // Show the sections
    document.getElementById('sections').style.display = 'flex';

    // Hide all subsections
    const subsectionLists = document.getElementsByClassName('subsection-list');
    for (let i = 0; i < subsectionLists.length; i++) {
        subsectionLists[i].style.display = 'none';
    }

    // Hide all chapter lists
    const chapterLists = document.getElementsByClassName('chapter-list');
    for (let i = 0; i < chapterLists.length; i++) {
        chapterLists[i].style.display = 'none';
    }

    // Hide the PDF viewer
    document.getElementById('pdf-viewer').style.display = 'none';

    // Reset the current chapter ID
    currentChapterId = null;
}

function goBackToSubsections(sectionId) {
    // Hide all subsections
    const subsectionLists = document.getElementsByClassName('subsection-list');
    for (let i = 0; i < subsectionLists.length; i++) {
        subsectionLists[i].style.display = 'none';
    }

    // Hide all chapter lists
    const chapterLists = document.getElementsByClassName('chapter-list');
    for (let i = 0; i < chapterLists.length; i++) {
        chapterLists[i].style.display = 'none';
    }

    // Hide the PDF viewer
    document.getElementById('pdf-viewer').style.display = 'none';

    // Show the selected subsection list
    document.getElementById(sectionId + '-subsections').style.display = 'block';

    // Reset the current chapter ID
    currentChapterId = null;
                                              }
