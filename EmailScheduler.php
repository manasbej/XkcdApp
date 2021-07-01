// To send the email as per the schedule

<?php
class EmailScheduler {
  // Properties
  public $interval = 10; // send email after 10 min
  

  // Methods
  function send_email_interval() {
    $emailService = New EmailService
    while (1){ //infinite loop
      // write code to fetch the emails  from database
      
      // Send the emails to receipent
      $emailService.send_email(....)
      //Wait for interval
      sleep($interval);
    }
  }
  function get_name() {
    
  }
}
?>
