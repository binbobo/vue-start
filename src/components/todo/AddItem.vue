<template>
  <div class="add-item">
    <form autocomplete="off" class="add-item-form"> 
      <input autofocus v-model="itemName" v-validate="'required'" type="text" name="itemName" placeholder="input item name here"> 
      <p v-show="errors.has('itemName')" class="invalid-field">{{ errors.first('itemName') }}</p>
      <button type="submit" @click.prevent="addNewTask()">Add New Item</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AddItem',

  data () {
    return {
      itemName: ''
    }
  },

  props: ['items'],

  methods: {
    addNewTask () {
      // form validation
      if (!this.validateForm()) {
        // show input error msg
        return
      }

      // add new task
      // how to access parent's data items? 1. custome event(value) 2. referemce type
      this.items.push({
        id: (this.items.length).toString(),
        itemName: this.itemName,
        completed: false
      })
    },

    validateForm () {
      return this.itemName !== ''
    }
  }
}
</script>

<style lang="scss">
$color: red;

.invalid-field {
  margin: 0;
  text-align: left;
  color: $color;
}
</style>


<style lang="scss" scoped>
.add-item {
  width: 100%;
  margin: 0 auto;

  .add-item-form input{
    width: 99%;
    height: 30px;
  }
}
</style>



