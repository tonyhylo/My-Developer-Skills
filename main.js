$('.firstRows').remove();

$("#addSkillBtn").click(function() {
    $('.table tbody').append('<tr><td><button class="btn btn-xs btn-danger">X</button></td><td>'+document.getElementById("addSkillBox").value+'</td></tr>');
    document.getElementById("addSkillBox").value = "";
});

$('.table tbody').on('click', 'button', function() {
    $(this).closest('tr').remove();
  });