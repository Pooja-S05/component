function myFunction()
         {
            var dots = document.getElementById("dots");
            var moreText = document.getElementById("more");
            var btnText = document.getElementById("myBtn");

            if (dots.style.display === "none") 
            {
                dots.style.display = "inline";
                btnText.innerHTML = "View More Answers";
                moreText.style.display = "none";
            } 
            else
            {
                dots.style.display = "none";
                btnText.innerHTML = "View less Answers";
                moreText.style.display = "inline";
            }
        }


        $('#myModal').on('shown.bs.modal', function () {
            $('#myInput').trigger('focus')
          })