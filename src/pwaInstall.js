let deferredPrompt = null;

export const setupPWAInstall = (setShowInstall) => {
  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredPrompt = e;
    setShowInstall(true);
  });
};

export const installPWA = async () => {
  if (!deferredPrompt) return;
  deferredPrompt.prompt();
  await deferredPrompt.userChoice;
  deferredPrompt = null;
};