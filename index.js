'use strict';

(function () {
    let $board = null;
    
    function clear() {
        $board.innerHTML = '';
    }
    
    function display(text) {
        $board.innerHTML += `${text}\n`;
    }
    
    function buildStatus() {
        let connectionType = 'not supported';
        let downlink = 'not supported';
        let downlinkMax = 'not supported';
        let effectiveType = 'not supported';
        let rtt = 'not supported';
        
        // console.log(navigator.connection);
        
        if ('connection' in navigator) {
            if ('type' in navigator.connection) {
                connectionType = navigator.connection.type;
            }
            
            if ('downlink' in navigator.connection) {
                downlink = `${navigator.connection.downlink}Mbps`;
            }
            
            if ('downlinkMax' in navigator.connection) {
                downlinkMax = `${navigator.connection.downlinkMax}Mbps`;
            }
            
            if ('effectiveType' in navigator.connection) {
                effectiveType = navigator.connection.effectiveType;
            }
            
            if ('rtt' in navigator.connection) {
                rtt = navigator.connection.rtt;
            }
        }
        
        return { connectionType, downlink, downlinkMax, effectiveType, rtt };
    }
    
    function logConnectionType() {
        const { connectionType, downlink, downlinkMax, effectiveType, rtt } = buildStatus();
        
        clear();
        display('net status:');
        display(` - connection type: ${connectionType}`);
        display(` - downlink: ${downlink}`);
        display(` - downlinkMax: ${downlinkMax}`);
        display(` - effectiveType: ${effectiveType}`);
        display(` - rtt: ${rtt}`);
    }
    
    function setup() {
        $board = document.querySelector('pre');
        logConnectionType();
        window.navigator.connection.addEventListener('change', logConnectionType);
    }
    
    setup();
}());
