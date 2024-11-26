
    function SendMail() {
      event.preventDefault();
    
        const data = {
          from_name: document.getElementById('firstname').value,
          email_id: document.getElementById('email').value,
          message: document.getElementById('messages').value
          };
    
          
           // Send email
         emailjs.send('service_1sijuz9', 'template_0lorufc', data)
         .then(function(response){
          document.getElementById("form").reset();  
          alert("Message sent sucessfully...thankyou for reaching out!!" , response.status) ;
          }, function(error){
            alert("Message could not deliver!!" , error) ;
          });
      }
  

 


