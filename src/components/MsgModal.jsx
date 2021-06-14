import swal from 'sweetalert';

const MsgModal = (evt) => {

    const btnName = evt.target.name.toLowerCase()

    if (btnName === "update"){
        // Actualizar Heroe
        swal("Hero updated", "Click on OK to continue", "success");
    } else if (btnName === "add"){
        // Agregar nuevo heroe
        swal("Hero added", "Click on OK to continue", "success");
    } else if (btnName === "delete") {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this hero data!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) {
                // Eliminar heroe
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