function openRoom() {
    let roomId = prompt("Enter Room ID to Join or Create:");
    if(roomId) {
        alert("Connecting to Private Table: " + roomId);
        // এখানে আপনার আগের সকেট ফাংশনগুলো কল হবে
    }
}

// ব্লার্ট ব্যালেন্স দেখানোর জন্য (ডেমো)
document.getElementById('blurt-balance').innerText = "120";
