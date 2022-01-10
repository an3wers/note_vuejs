const App = {
    data() {
        return {
            title: 'Notes',
            // объект input
            input: {
                value: '',
                placeholder:'Type your note'
            },
            notes: ['123'],
        }
    },

    watch: {
        notes: {
            handler(list) {
                // console.log(list)

                localStorage.setItem('notes',  JSON.stringify(list))

            },
            deep:true
        }
    },

    mounted() {
        this.getList()
    },

    methods: {
        inputSubmin() {
            this.notes.push(this.input.value)
            // reset
            this.input.value = ''
        },
        remove(index) {
            // удаляем элемент из массива
            
            this.notes.splice(index, 1)


        },

        getList(){
            const notesFromLS = localStorage.getItem('notes')

            if(notesFromLS) {
                this.notes = JSON.parse(notesFromLS)
            } 
            else {
                this.notes
            }
        },

        // editNote(index) {
        //     console.log(this.notes[index])
        // }
    }

}

Vue.createApp(App).mount('#app')