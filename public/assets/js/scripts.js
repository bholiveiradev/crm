!function(e){var n={};function t(a){if(n[a])return n[a].exports;var o=n[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(a,o,function(n){return e[n]}.bind(null,o));return a},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="/",t(t.s=2)}({2:function(e,n,t){e.exports=t("yQhj")},yQhj:function(e,n){var t,a,o,r,i,l;t=window,a=document,o="script",r="ga",t.GoogleAnalyticsObject=r,t.ga||(t.ga=function(){(t.ga.q=t.ga.q||[]).push(arguments)}),t.ga.l=+new Date,i=a.createElement(o),l=a.getElementsByTagName(o)[0],i.src="https://www.google-analytics.com/analytics.js",l.parentNode.insertBefore(i,l),ga("create","UA-XXXXX-X","auto"),ga("send","pageview"),$((function(){$("#data_table").DataTable({language:{url:"https://cdn.datatables.net/plug-ins/1.10.22/i18n/Portuguese-Brasil.json"},responsive:!0,select:!0,aoColumnDefs:[{bSortable:!1,aTargets:["nosort"]}]});$("input[name=zipcode]").on("blur",(function(){var e=$(this).val().replace(/\D/g,"");if(""!==e&&"undefined"!==e){if(/^[0-9]{8}$/.test(e)){var n=document.createElement("script");n.src="https://viacep.com.br/ws/".concat(e,"/json/?callback=retorno"),document.body.appendChild(n)}}})),$("input[name=document]").on("blur",(function(){var e="https://www.receitaws.com.br/v1/cnpj/"+$(this).val().replace(/\D/g,"");$.ajax({method:"GET",url:e,dataType:"jsonp",success:function(e){"OK"===e.status&&($("[name=name]").val(e.nome),$("[name=alias]").val(e.fantasia),$("[name=phone]").val(e.telefone),$("[name=email]").val(e.email),$("[name=zipcode]").val(e.cep),$("[name=address]").val(e.logradouro),$("[name=number]").val(e.numero),$("[name=district]").val(e.bairro),$("[name=complement]").val(e.complemento),$("[name=city]").val(e.municipio),$("[name=state]").val(e.uf).change())}})})),$("input[name=phone]").inputmask("(99) 9999-9999"),$("input[name=celphone]").inputmask("(99) 9 9999-9999"),$("input[name=zipcode]").inputmask("99999-999"),$("input[name=document]").inputmask({mask:["999.999.999-99","99.999.999/9999-99"]}),$(".select2").select2({width:"resolve"})})),$(window).on("load",(function(){$("#loading").fadeOut(300,(function(){$("#loading").remove()}))}))}});