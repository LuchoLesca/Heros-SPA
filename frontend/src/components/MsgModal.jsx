// import React from 'react'
import swal from 'sweetalert';
// eslint-disable-next-line
import { saveHero, updateHero, deleteHero } from 'services/db_functions'


const MsgModal = async({btnName, hero}) => {
    
    if (btnName === "update"){
        await updateHero(hero)  // UPDATE
        await swal("Hero updated", "Click on OK to continue", "success");

    } else if (btnName === "add"){
        await saveHero(hero)  // ADD
        await swal("Hero added", "Click on OK to continue", "success");
        window.location.replace("/")

    } else if (btnName === "delete") {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this hero data!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then(async (willDelete) => {
            if (willDelete) {
                await deleteHero(hero._id)  // DELETE
                await swal("Hero's info has been deleted!", {
                    icon: "success",
                });
                window.location.replace("/")
            } else {
                swal("Your hero's info is safe!");
            }
        });
    }


}

export default MsgModal;