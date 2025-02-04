document.getElementById("clickmebtn").addEventListener("click", () => {
    console.log('Clicked');
    // alert('CLICKED');
    Swal.fire({
        title: 'Success!',
        text: 'SweetAlert2 is working!',
        icon: 'success',
        confirmButtonText: 'OK'
    });
})