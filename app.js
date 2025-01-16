// Manage the state of toggle switches
const toggles = {
    seatbelt: false,
    distraction: false,
    fatigue: false,
    facial: false,
    smoke: false,
    fire: false,
    passenger: false,
    weapons: false,
  };
  
  // Toggle switch handler
  function toggleSwitch(name) {
    toggles[name] = !toggles[name];
    updateToggleState(name);
  }
  
  // Update the visual state of the toggle switches
  function updateToggleState(name) {
    const toggleItem = document.getElementById(name);
    const toggleSwitch = toggleItem.querySelector('.toggle-switch');
    
    if (toggles[name]) {
      toggleItem.classList.add('on');
      toggleSwitch.classList.add('on');
    } else {
      toggleItem.classList.remove('on');
      toggleSwitch.classList.remove('on');
    }
  }
  
  // Set up webcam stream
  function startWebcam() {
    const video = document.getElementById('webcam');
    
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(function (stream) {
          video.srcObject = stream;
        })
        .catch(function (error) {
          console.error("Error accessing webcam:", error);
        });
    }
  }
  
  // Initialize the webcam when the page loads
  window.onload = startWebcam;
  