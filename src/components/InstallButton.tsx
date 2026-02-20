import { MdInstallMobile } from 'react-icons/md';

export default function InstallButton() {
  const handleInstallPwa = function () {
    alert('TODO: Make Pwa installable on button click');
  };
  return (
    <button className="install-button" onClick={handleInstallPwa}>
      <span className="text">Install App</span>
      <MdInstallMobile className="icon" />
    </button>
  );
}
