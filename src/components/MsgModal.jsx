import swal from 'sweetalert';

const MsgModal = (evt) => {

    const btnName = evt.target.innerText.toLowerCase()

    if (btnName === "update"){
        swal("Updated", "Click on OK to continue", "success");
    } else if (btnName === "delete") {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this hero's info!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) {
                swal("Hero's info has been deleted!", {
                    icon: "success",
                });
            } else {
                swal("Your hero's info is safe!");
            }
        });
    }
}

export default MsgModal;