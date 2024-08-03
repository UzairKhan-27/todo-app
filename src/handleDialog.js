function showDialog()
{
    const dialog=document.querySelector("dialog");
    dialog.showModal();   
}
function closeDialog()
{
    const dialog=document.querySelector("dialog");
    dialog.close();   
}
function resetDialog()
{
    document.getElementById("title").value="";
    document.getElementById("description").value="";
    document.getElementById("dueDate").value="2011-09-29"
    document.getElementById("priority").value="Normal";
}

export{showDialog,closeDialog,resetDialog}