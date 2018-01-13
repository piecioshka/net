'use strict';

(function () {
    let $board = null;
    
    function clear() {
        $board.innerHTML = '';
    }
    
    function display(text) {
        $board.innerHTML += `${text}<br/>`;
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
        display(` - connection type: <strong>${connectionType}</strong>`);
        display(` - downlink: <strong>${downlink}</strong>`);
        display(` - downlinkMax: <strong>${downlinkMax}</strong>`);
        display(` - effectiveType: <strong>${effectiveType}</strong>`);
        display(` - rtt: <strong>${rtt}</strong>`);
    }
    
    function setup() {
        $board = document.querySelector('.board');
        logConnectionType();
        window.navigator.connection.addEventListener('change', logConnectionType);
    }
    
    setup();
}());
