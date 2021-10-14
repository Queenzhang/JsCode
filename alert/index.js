var modelTimer;

function addComfirmEvent(){
    alertMessage('success','操作成功！',true,function(status){
        if(status){
            console.log('comfirm')
        }
    })
}

function alertMessage(className,val,selfClose,callback){
    var background;
    var mess;
    var closeName;
    var timeNum = 2000;
    $('#alert-Modal-mess').remove();
    $('.modal-backdrop').css('display','none')
    if(className=='warning'){
        closeName = '确定';
        background = 'background-color:#f59d00';
    }else if(className=='success'){
        closeName = '我知道了';
        background = 'background-color:#07fc55';
    }else if(className=='info'){
        closeName = '确定';
        background = 'background-color:#4989f7';
    }else if(className=='danger'){
        closeName = '我知道了';
        background = 'background-color:#e25142';
    }
    if (val.message) {
        mess = val.message
    } else if (val.err) {
        mess = val.err
    } else if (val.error) {
        mess = val.error
    } else {
        mess = val
    }
    var content = '<div id="alert-Modal-mess">';
    content += '<div class="modal fade" id="alert_Modal" tabindex="-1" style="top:30%;" role="dialog" aria-hidden="true" data-backdrop="static" data-keyboard="false">';
    content += '    <div class="modal-dialog" role="document">'
    content += '        <div class="modal-content">'
    content += '            <img src="./imgs/'+ className +'.png" width="60" height="60" alt=""'
    content += '                 style="position: absolute;top:20px;left: 44%;">'
    content += '            <div class="modal-body">'
    content += '                 <div style="color:#333;margin: 80px 0 30px 0;text-align: center;">' + mess +'</div>'
    content += '                 <button id="close_btn" type="button" data-dismiss="modal"'
    content += '                  style="width: 200px;margin-left:32%;padding-top:8px;padding-bottom: 8px;color:#fff;border:none;text-shadow: none;opacity:1;font-weight: normal;font-size:16px;'+background+'">';     
    content +=                   closeName + '</button>';
    content += '            </div>'
    content += '       </div>'
    content += '    </div>'
    content += '</div>'
    content += '</div>'
    $(document.body).append(content);  
    $('#alert_Modal').modal('show');
    if (className != 'danger' && !selfClose) {
        modelTimer = setTimeout(closeModal,timeNum);
    }
    $('#alert_Modal').on('hide.bs.modal', callback)
}

function closeModal() {
    clearTimeout(modelTimer);
    $('#alert_Modal').modal('hide');
    $('#alertMessage').alert('close');
}



