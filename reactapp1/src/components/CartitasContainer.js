import Cartita from './Cartita';

function CartitasContainer(){
    return(
        <section class="pt-4">
            <div class="container px-lg-5">
                <div class="row gx-lg-5">
                    <Cartita icono="bi bi-collection" titulo ="Fresh new layout" descripcion="With Bootstrap 5, we've created a fresh new layout for this template!" />
                    <Cartita icono="bi bi-download" titulo ="Free to download" descripcion="As always, Start Bootstrap has a powerful collectin of free templates." />
                    <Cartita icono="bi bi-card-heading" titulo ="Jumbotron hero header" descripcion="The heroic part of this template is the jumbotron hero header!" />
                    <Cartita icono="bi bi-bootstrap" titulo ="Feature boxes" descripcion="We've created some custom feature boxes using Bootstrap icons!" />
                    <Cartita icono="bi bi-code" titulo ="Simple clean code" descripcion="We keep our dependencies up to date and squash bugs as they come!" />
                    <Cartita icono="bi bi-patch-check" titulo ="A name you trust" descripcion="Start Bootstrap has been the leader in free Bootstrap templates since 2013!" />
                </div>
            </div>
        </section>
    );
}

export default CartitasContainer;