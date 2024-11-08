let idCounter = 1 
 
        function addToTable() {  
            const name = document.getElementById("name").value;  
            const email = document.getElementById("email").value;  
            const status = document.getElementById("status").value;  
 
            //alert infor 
            if (!name || !email) {  
                alert("Mohon isi semua data dengan benar");  
                return;  
            }  
 
            //alert @gmail.co 
            if (!/@gmail\.com$/.test(email)) {  
               alert("Email harus menggunakan'@gmail.com'");  
                return;  
            }  
 
            // Tambahkan data ke tabel dan animasi 
            const table = document.getElementById("dataTable").getElementsByTagName('tbody')[0];  
            const newRow = table.insertRow();  
            newRow.classList.add("fade-in"); 
 
            newRow.innerHTML =    
                `<td>${idCounter++}</td>   
                <td>${name}</td>   
                <td>${email}</td>   
                <td>${status}</td>   
            `; 
 
            // Reset  
            document.getElementById("contactForm").reset();  
        }