export default {
  props: ["files", "active"],

  data() {
    return {
      flag: false,
      filename: "",
    };
  },

  template: `
    <section id="file-explorer" class="text-white py-3">
      <small class="px-2">Add Your Files Here</small>
      <i class="fas fa-plus" @click="newFile"></i>

      <hr class="mb-0"/>

      <ul class="list-group list-group-flush">
        <li class="list-group-item" v-for="(file,index) in files" :key="index" :class="{active: index==active}" @click="openFile(index)">
          <small class="d-flex align-items-center">
            <span v-html="icon(file.name)"></span>&nbsp;<span class="filename">{{file.name}}</span>
            <i class="las la-times float-end" @click="removeFile(index)"></i>
          </small>
        </li>
        
        <li class="list-group-item" v-show="flag">
          <small>
            <div class="input-group mb-3">
              <span class="input-group-text p-0 border-0 bg-transparent"><i class="fas fa-plus"></i></span>
              <input maxlength="100" type="text" class="form-control py-0 border-0 bg-transparent" ref="filename" @blur="addFile"
              @keyup.enter.prevent="addFile"
              v-model="filename">
            </div>
          </small>
        </li>
        
      </ul>
      
    </section>
    `,

  computed: {
    icon() {
      return (filename) => {
        if (filename.includes(".")) {
          filename = filename.split(".");
          if (filename.length >= 2) {
            let ext = filename.pop();

            switch (ext) {
              case "c":
              case "cpp":
                return `<i class="las la-file text-primary"></i>`;
              case "java":
                return `<i class="lab la-java text-primary"></i>`;

              case "py":
                return `<i class="lab la-python text-primary"></i>`;

              
              default:
                return `<i class="las la-file text-primary"></i>`;
            }
          }
        }
      };
    },
  },

  methods: {
    newFile() {
      this.flag = true;
      setTimeout(() => {
        this.$refs.filename.focus();
      }, 0);
    },

    addFile() {
      if (this.filename.length > 0) {
        this.$emit("addFile", { name: this.filename, content: "" });
      }
      this.filename = "";
      this.flag = false;
    },

    removeFile(index) {
      this.$emit("removeFile", index);
    },

   
  },
};
