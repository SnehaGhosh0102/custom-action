const core=require('@action/core');
const github=require('@actions/exec');
const exec=require('@actions/exec');
function run(){
    core.notice('Hello');
}
run();