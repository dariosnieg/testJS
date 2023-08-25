import NavLink from './NavLink';
import PageTitle from './PageTitle';

function Navbar(){
    return(
        // Responsive navbar
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container px-lg-5">
                
                <PageTitle title="Start Bootstrap" />
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <NavLink texto="Home" clase="nav-link active" />
                        <NavLink texto="About" clase="nav-link"/>
                        <NavLink texto="Contact" clase="nav-link"/>
                    </ul>
                </div>
            </div>
        </nav>
        );
}

export default Navbar;