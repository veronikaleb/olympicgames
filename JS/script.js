document.addEventListener('DOMContentLoaded', () => {
    const visitorsData = JSON.parse(localStorage.getItem('visitors')) || [];
    
    function updateVisitorData() {
        const timestamp = Date.now();
        visitorsData.push(timestamp);
        localStorage.setItem('visitors', JSON.stringify(visitorsData));
        console.log('Visitor data updated');
    }
    
    function updateCounterDisplay() {
        const totalVisitorsElement = document.getElementById('totalVisitors');
        const onlineVisitorsElement = document.getElementById('onlineVisitors');
        
        if (totalVisitorsElement && onlineVisitorsElement) {
            totalVisitorsElement.textContent = visitorsData.length;
            
            const currentTime = Date.now();
            const onlineVisitors = visitorsData.filter(timestamp => currentTime - timestamp <= 5 * 60 * 1000).length;
            onlineVisitorsElement.textContent = onlineVisitors;
            
            console.log('Counter display updated');
        } else {
            console.error('Counter display elements not found');
        }
    }
    
    updateVisitorData();
    updateCounterDisplay();
});

	