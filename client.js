import {ReactInstance} from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    fullScreen: true,
    ...options,
  });

  r360.renderToSurface(
    r360.createRoot(),
    r360.getDefaultSurface()
  );
  imgFile = new URLSearchParams(window.location.search).get('img')
  
  imgFile ? r360.compositor.setBackground(r360.getAssetURL(imgFile)) : false;
}

window.React360 = {init};
