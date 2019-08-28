import '../css/loader.css';

const addOverlay = () => {
    let overlay = document.createElement('div');
    overlay.setAttribute('id', 'loadOverlay');
    document.body.appendChild(overlay);

    let loader = document.createElement('div');
    loader.setAttribute('id', 'loader');
    document.body.appendChild(loader);
};

const removeOverlay = () => {
    const overlay = document.getElementById('loadOverlay');
    overlay.remove();

    const loader = document.getElementById('loader');
    loader.remove();
}

const waitForLoad = async (functionToCall) => {
    console.log('waitForLoad');
    addOverlay();
    await Promise.resolve(functionToCall);
    removeOverlay();

    return functionToCall;
}

export default { waitForLoad };