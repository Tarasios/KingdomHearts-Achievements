document.addEventListener('DOMContentLoaded', async function () {
    await i18n.init();

    // Hide the image slot gracefully if the screenshot doesn't exist yet.
    // The load failure may already have happened by the time this runs,
    // so check the current state as well as listening for future errors.
    const projectImage = document.getElementById('project-image');
    if (projectImage) {
        const hide = () => { projectImage.style.display = 'none'; };
        projectImage.addEventListener('error', hide);
        if (projectImage.complete && projectImage.naturalWidth === 0) hide();
    }
});
