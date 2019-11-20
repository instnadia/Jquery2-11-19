$("#table").on("click", "tr", function() {
  alert("click!");
});

$("#form").submit(function(event) {
  event.preventDefault();
  var full_name = $("#full-name");
  var email = $("#email");

  console.log($('#form').serializeArray());

  var table_row = `<tr>
                    <td>${full_name.val()}</td>
                    <td>${email.val()}</td>
                    </tr>`;
  $("#table tbody").append(table_row);
  $("#table tbody").append(alert("hey whats upppp"));


  full_name.val("");
  email.val("");
  full_name.focus();
});
