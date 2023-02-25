export default {
  props: ["mirror", "connected"],

  template: `
    <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand d-flex align-items-center" href="#">
               
                <h6 class="ms-2 mb-0"> Code Editor</h6>
            </a>
            
            <div v-show="!connected" ><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>

            
        </div>
    </nav>
    `,
};
