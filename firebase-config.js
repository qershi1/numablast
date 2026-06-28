/* Firebase init for NUMA BLAST (web). Loaded after the firebase compat CDN SDKs.
   Client config is PUBLIC by design — safe to ship. */
(function(){
  try{
    var firebaseConfig = {
      apiKey: "AIzaSyCqJpMgogl_LTdQBiXNxN4RirGQ93v8grM",
      authDomain: "numablast.firebaseapp.com",
      projectId: "numablast",
      storageBucket: "numablast.firebasestorage.app",
      messagingSenderId: "736284967984",
      appId: "1:736284967984:web:28078f95b1695484ba19f5",
      measurementId: "G-3LC0TX941F"
    };
    if(typeof firebase === 'undefined'){ console.warn('[firebase] SDK not loaded (CDN blocked?) — login falls back to local stub'); return; }
    firebase.initializeApp(firebaseConfig);
    window.fbAuth = firebase.auth();
    try{ window.fbAuth.setPersistence(firebase.auth.Auth.Persistence.LOCAL); }catch(e){}
    window.fbReady = true;
    console.log('[firebase] ready · project', firebaseConfig.projectId);
  }catch(e){ console.warn('[firebase] init failed', e); }
})();
