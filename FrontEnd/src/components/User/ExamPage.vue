<script  setup>
import TitleExam from '../components/ExamPage/TitleExam.vue';
import QAExam from '../components/ExamPage/QAExam.vue';
import QuestionTable from '../components/ExamPage/QuestionTable.vue';
</script>

<template>
    <TitleExam></TitleExam>
  <div class="flex justify-between p-10">
    <QAExam></QAExam>
    <QuestionTable></QuestionTable>
  </div>
</template>

<style scoped>
</style>
