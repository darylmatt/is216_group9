function getDate() {

    days = {
      1: "Monday",
      2: "Tuesday",
      3: "Wednesday",
      4: "Thursday", 
      5: "Friday",
      6: "Saturday",
      7: "Sunday"
    }

    months = {
      1: "January",
      2: "February",
      3: "March",
      4: "April", 
      5: "May",
      6: "June",
      7: "July",
      8: "August",
      9: "September",
      10: "October",
      11: "November",
      12: "December"
    }

    console.log("test");
    var date = new Date();
    out_day = date.getDay();
    out_date = date.getDate();
    out_month = date.getMonth();
    out_year = date.getFullYear();
    
    extracted_date = `${days[out_day]}, ${out_date} ${months[out_month]} ${out_year}`;

    document.getElementById("curr_date").innerHTML = extracted_date
  }