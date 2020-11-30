<template>
    <div :class="sender ? 'text-wrapper-sender' : 'text-wrapper-reciever'">
    <div class="text-content">{{message}}</div>
    </div>
</template>

<script>
export default {
  props: {
    message: String,
    sender:  Boolean,
  },
}
</script>

<style>
/** Left: Green bubble */
.text-wrapper-reciever {
  background-color: rgb(101, 152, 147);
  padding: 8px;
  border-radius: 10px 16px 16px 0px;
  color: white;
  width: fit-content;
}

/** Right: Red bubble */
.text-wrapper-sender {
  background-color: rgb(187, 100, 97);
  padding: 10px;
  border-radius: 16px 10px 0px 16px;
  color: white;
  width: fit-content;
}

.text-content {
  font-size: 12px;
  font-weight: 500;
  width:fit-content;
}
</style>
