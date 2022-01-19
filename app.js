const App = {
    data() {
        return {
            title: 'Notes',
            // объект input
            input: {
                value: '',
                placeholder:'Type your note'
            },
            notes: [],
            
        }
    },

    // Смотрим за массивом и если, что-то изменяется, то сразу отправляем значения в LS!
    watch: {
        notes: {
            handler(list) {
                // console.log(list)

                localStorage.setItem('notes',  JSON.stringify(list))

            },
            deep:true
        }
    },

    // Рендерим на экран список
    mounted() {
        this.getList()
    },

    methods: {
        inputSubmin() {
            this.notes.push({
                text: this.input.value,
                id: Date.now(),
                editing: false
            })
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

        editNote(id) {
            
            console.log(id)
        },

        saveNote(index) {

        },

    }

}

Vue.createApp(App).mount('#app')