$(function(){
  TouchSlide({ 
    slideCell:"#focus",
    titCell:".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
    mainCell:".bd ul", 
    effect:"leftLoop", 
    autoPlay:true,//自动播放
    autoPage:true //自动分页
  });

  $(function(){
	    $('.nav__trigger').on('click', function(e){
	          e.preventDefault();
	          $(this).parent().toggleClass('nav--active');
	        });
	})

  $(function() {
        $('#img').change(function() {
            var file = this.files[0];
            var r = new FileReader();
            r.readAsDataURL(file);
            $(r).load(function() {
                $('#photo').html('<img src="' + this.result + '" alt="" />');
            })
        })
    })

    $(function() {
        $('#img1').change(function() {
            var file = this.files[0];
            var r = new FileReader();
            r.readAsDataURL(file);
            $(r).load(function() {
                $('#photo1').html('<img src="' + this.result + '" alt="" />');
            })
        })
    })

    $(".format_close").on("touchstart",function(){
      $('.com form').css('display','block')
      $('#chose_format').css('display','none')
    });
    $("#spyt").on("touchstart",function(){
      $('.com form').css('display','none')
      $('#chose_format').css('display','block')
    });









    $('#chose_format .format_con .format_main dl dd a').on('touchstart',function(){
      $(".chose_format_btn").text($(this).text());
       
      $('.com form').css('display','block');
      $('#chose_format').css('display','none');
      $('#and').css('display','none');
      

      
    })

    $('#chose_format .format_con .format_main div').on('touchstart',function(){
      $(".chose_format_btn").text($(this).text());
       
      $('.com form').css('display','block');
      $('#chose_format').css('display','none');
      $('#and').css('display','none');
      
    })

	$(".wdxx .r").bind('touchstart',function(){
		if(!$(this).hasClass('_active')){
			$(this).closest('.wdxx').find('.none').css('display','block');
			$(this).addClass('_active');
		}else{
			 $(this).closest('.wdxx').find('.none').css('display','none');
			 $(this).removeClass('_active');
		}
	});

	var on="false";
	$('.zk').on("touchstart",function(){

	if (on=="false") {
	$('#wzp').css('height','160px')
	$('.zk').html('收起')
	on="true"
	}else{
	 $('#wzp').css('展开')
	 $('#wzp').css('height','80px')
	on="false"
	}

	})
	TouchSlide({ 
					slideCell:"#slideBox",
					titCell:".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
					mainCell:".bd ul", 
					effect:"leftLoop", 
					autoPage:true //自动分页
				});


	$(function() {
        $('#img').change(function() {
            var file = this.files[0];
            var r = new FileReader();
            r.readAsDataURL(file);
            $(r).load(function() {
                $('#photo').html('<img src="' + this.result + '" alt="" />');
            })
        })
    })

            $(function() {
                $('#img1').change(function() {
                    var file = this.files[0];
                    var r = new FileReader();
                    r.readAsDataURL(file);
                    $(r).load(function() {
                        $('#photo1').html('<img src="' + this.result + '" alt="" />');
                    })
                })
            })

            $("#log").on("touchstart",function(){
			   $('.log').css('display','block')
			    $('.reg').css('display','none')
			    $('#log').addClass("on")
			    $('#reg').removeClass("on")
			});
			$("#reg").on("touchstart",function(){
			   $('.reg').css('display','block')
			    $('.log').css('display','none')
			    $('#reg').addClass("on")
			    $('#log').removeClass("on")
			});


			$("#z").on("touchstart",function(){
              $('.z').css('display','block');
              $('.s').css('display','none');
              $("#z").addClass('blue');
              $("#s").removeClass('blue');
            });  

            $("#s").on("touchstart",function(){
              $('.s').css('display','block');
              $('.z').css('display','none');
              $("#s").addClass('blue');
              $("#z").removeClass('blue');
            });  


            //我的信息-下订单 判断必填信息是否为空
            $(function(){
			  $('.addorder').on('submit',function(){
			   if($.trim($(".chose_format_btn").text())=='----请选择订单类型----'){
			      $('.error').show();
			      $('.error').text("请选择订单类型");
			      return false;
			    }
			  });        
			})


			//我的信息-下订单 判断必填信息是否为空
            $(function(){
				$('#fby').on('submit',function(){
					if($('#fby #title').val().length<6){

					    $('.error').show();
				     	$('.error').text("标题不能少于6个字");
					    return false;
					//}else  if($('input[name="lofo2"]').val()==''){
						     // $('.error').show();
						     // $('.error').text("请输入经营业态");
						     // return false;
						    }else if($('#fby select[name="shop2"]').val()==0){
						      $('.error').show();
						      $('.error').text("商铺类型");
						      return false;
						    }
						    else if($('#fby input[name="area"]').val()==''){
						      $('.error').show();
						      $('.error').text("请输入面积");
						      return false;
						  	}else  if($('#fby input[name="price"]').val()==''){
						      $('.error').show();
						      $('.error').text("请输入租金");
						      return false;
						  	}else if($('#fby input[name="fee"]').val()==''){
						      $('.error').show();
						      $('.error').text("请输入转让费");
						      return false;
						  	}else if($('#fby select[name="province"]').val()==0){

						      $('.error').show();
						      $('.error').text("请选择省份/直辖市！");
						      return false;
						    }else if($('#fby select[name="city"]').val()==0){
						      $('.error').show();
						      $('.error').text("请选择城市");
						      return false;
						  	}else  if($('#fby select[name="town"]').val()==0){
						      $('.error').show();
						      $('.error').text("请选择区域！");
						      return false;
						  	}else  if($('#fby select[name="town"]').val()==0){
						      $('.error').show();
						      $('.error').text("请选择区域！");
						      return false;
						  	}else  if($('#fby textarea').val()=='商铺详情'){
						      $('.error').show();
						      $('.error').text("请输入详情！");
						      return false;
						  	}
			  });        
			})


           	//免费发布-生意转让  判断必填信息是否为空
           	$(function(){
				$('#syzr').on('submit',function(){
					 
					if($('#syzr input[name="title"]').val().length<6){
					    $('.error').show();
				     	$('.error').text("标题不能少于6个字");
					    return false;
						//}else  if($('#syzr input[name="lofo2"]').val()==''){
						//	      $('.error').show();
						//	      $('.error').text("请输入经营业态");
						//	      return false;
					    }else if($('#syzr select[name="shop2"]').val()==0){
					      $('.error').show();
					      $('.error').text("商铺类型");
					      return false;
					    }
					    else if($('#syzr input[name="area"]').val()==''){
					      $('.error').show();
					      $('.error').text("请输入面积");
					      return false;
					  	}else  if($('#syzr input[name="price"]').val()==''){
					      $('.error').show();
					      $('.error').text("请输入租金");
					      return false;
					  	}else if($('#syzr input[name="fee"]').val()==''){
					      $('.error').show();
					      $('.error').text("请输入转让费");
					      return false;
					  	}else if($('#syzr select[name="province"]').val()==0){

					      $('.error').show();
					      $('.error').text("请选择省份/直辖市！");
					      return false;
					    }else if($('#syzr select[name="city"]').val()==0){
					      $('.error').show();
					      $('.error').text("请选择城市");
					      return false;
					  	}else  if($('#syzr select[name="town"]').val()==0){
					      $('.error').show();
					      $('.error').text("请选择区域！");
					      return false;
					  	}else  if($(' textarea').val()==''){
					      $('.error').show();
					      $('.error').text("请输入详情！");
					      return false;
					  	}else   if($('input[name="username"]').val()==''){
					      $('.error').show();
					      $('.error').text("请填写客户姓名!");
					      return false;
					  	}else   if($('input[name="phone"]').val().length!=11){
								    $('.error').show();
								    $('.error').text("手机号码为11位！");
								    return false;
					  	 
					}
			  	});        
			})

			//免费发布-求租求购  判断必填信息是否为空
           	$(function(){
				$('#qzqg').on('submit',function(){
					if ($('#qzqg .z').css('display')=='block') {
				        if($('#qzqg input[name="title"]').val().length<6){
						    $('.error').show();
					     	$('.error').text("标题不能少于6个字");
						    return false;
							//}else  if($('#syzr input[name="lofo2"]').val()==''){
							//	      $('.error').show();
							//	      $('.error').text("请输入经营业态");
							//	      return false;
						    }else if($('#qzqg select[name="shop2"]').val()==0){
						      $('.error').show();
						      $('.error').text("商铺类型");
						      return false;
						    }
						    else if($('#qzqg input[name="minArea"]').val()==''){
						      $('.error').show();
						      $('.error').text("请输入最小面积");
						      return false;
						      }
						    else if($('#qzqg input[name="maxArea"]').val()==''){
						      $('.error').show();
						      $('.error').text("请输入最大面积");
						      return false;
						  	}else  if($('#qzqg input[name="minPrice"]').val()==''){
						      $('.error').show();
						      $('.error').text("请输入最小租金");
						      return false;
						    }else  if($('#qzqg input[name="maxPrice"]').val()==''){
						      $('.error').show();
						      $('.error').text("请输入最大租金");
						      return false;
						  	
						  	}else if($('#qzqg select[name="province"]').val()==0){

						      $('.error').show();
						      $('.error').text("请选择省份/直辖市！");
						      return false;
						    }else if($('#qzqg select[name="city"]').val()==0){
						      $('.error').show();
						      $('.error').text("请选择城市");
						      return false;
						  	}else  if($('#qzqg select[name="town"]').val()==0){
						      $('.error').show();
						      $('.error').text("请选择区域！");
						      return false;
						  	}else  if($(' textarea').val()==''){
						      $('.error').show();
						      $('.error').text("请输入详情！");
						      return false;
						  	}else   if($('input[name="username"]').val()==''){
						      $('.error').show();
						      $('.error').text("请填写客户姓名!");
						      return false;
						  	}else  if($('input[name="phone"]').val().length!=11){
								      $('.error').show();
								      $('.error').text("手机号码为11位！");
								      return false;
						  	 
							}
					 				
						}else{
							if($('#qzqg input[name="title"]').val().length<6){
						    $('.error').show();
					     	$('.error').text("标题不能少于6个字");
						    return false;
							//}else  if($('#syzr input[name="lofo2"]').val()==''){
							//	      $('.error').show();
							//	      $('.error').text("请输入经营业态");
							//	      return false;
						    }else if($('#qzqg select[name="shop2"]').val()==0){
						      $('.error').show();
						      $('.error').text("商铺类型");
						      return false;
						    }
						    else if($('#qzqg input[name="minArea"]').val()==''){
						      $('.error').show();
						      $('.error').text("请输入最小面积");
						      return false;
						      }
						    else if($('#qzqg input[name="maxArea"]').val()==''){
						      $('.error').show();
						      $('.error').text("请输入最大面积");
						      return false;
						  	
						    }else  if($('#qzqg input[name="sale"]').val()==''){
						      $('.error').show();
						      $('.error').text("请输入购买预算");
						      return false;
						  	
						  	}else if($('#qzqg select[name="province"]').val()==0){

						      $('.error').show();
						      $('.error').text("请选择省份/直辖市！");
						      return false;
						    }else if($('#qzqg select[name="city"]').val()==0){
						      $('.error').show();
						      $('.error').text("请选择城市");
						      return false;
						  	}else  if($('#qzqg select[name="town"]').val()==0){
						      $('.error').show();
						      $('.error').text("请选择区域！");
						      return false;
						  	}else  if($(' textarea').val()==''){
						      $('.error').show();
						      $('.error').text("请输入详情！");
						      return false;
						  	}else   if($('input[name="username"]').val()==''){
						      $('.error').show();
						      $('.error').text("请填写客户姓名!");
						      return false;
						  	}else  if($(' #qzqg input[name="phone"]').val()!=''){
						  			if($('input[name="phone"]').val().length!=11){

									      $('.error').show();
									      $('.error').text("手机号码为11位！");
									      return false;
						  	}
						}
					}
			    });        
			})

			//免费发布-写字楼租售  判断必填信息是否为空
           	$(function(){
				$('#xzlzs').on('submit',function(){
					if ($('#xzlzs .z').css('display')=='block') {
				        if($('#xzlzs input[name="title"]').val().length<6){
						    $('.error').show();
					     	$('.error').text("标题不能少于6个字");
						    return false;
							//}else  if($('#syzr input[name="lofo2"]').val()==''){
							//	      $('.error').show();
							//	      $('.error').text("请输入经营业态");
							//	      return false;
						    }else if($('#xzlzs select[name="shop2"]').val()==0){
						      $('.error').show();
						      $('.error').text("商铺类型");
						      return false;
						    }
						    else if($('#xzlzs input[name="area"]').val()==''){

						      $('.error').show();
						      $('.error').text("请输入面积");
						      return false;
						     
						    }else  if($('#xzlzs input[name="price"]').val()==''){
						      $('.error').show();
						      $('.error').text("请输入租金");
						      return false;
						  	
						  	}else if($('#xzlzs select[name="province"]').val()==0){

						      $('.error').show();
						      $('.error').text("请选择省份/直辖市！");
						      return false;
						    }else if($('#xzlzs select[name="city"]').val()==0){
						      $('.error').show();
						      $('.error').text("请选择城市");
						      return false;
						  	}else  if($('#xzlzs select[name="town"]').val()==0){
						      $('.error').show();
						      $('.error').text("请选择区域！");
						      return false;
						  	}else  if($(' textarea').val()==''){
						      $('.error').show();
						      $('.error').text("请输入店铺介绍！");
						      return false;
						  	}else   if($('input[name="username"]').val()==''){
						      $('.error').show();
						      $('.error').text("请填写客户姓名!");
						      return false;
						  	}else   if($('input[name="phone"]').val().length!=11){
									      	$('.error').show();
									      	$('.error').text("手机号码为11位！");
									      	return false;
						  			}
						 				
						}else{
					        if($('#xzlzs input[name="title"]').val().length<6){
							    $('.error').show();
						     	$('.error').text("标题不能少于6个字");
							    return false;
								//}else  if($('#syzr input[name="lofo2"]').val()==''){
								//	      $('.error').show();
								//	      $('.error').text("请输入经营业态");
								//	      return false;
							    }else if($('#xzlzs select[name="shop2"]').val()==0){
							      $('.error').show();
							      $('.error').text("商铺类型");
							      return false;
							    }
							    else if($('#xzlzs input[name="area"]').val()==''){

							      $('.error').show();
							      $('.error').text("请输入面积");
							      return false;
							     
							    }else  if($('#xzlzs input[name="sale"]').val()==''){
							      $('.error').show();
							      $('.error').text("请输入售价");
							      return false;
							  	
							  	}else if($('#xzlzs select[name="province"]').val()==0){

							      $('.error').show();
							      $('.error').text("请选择省份/直辖市！");
							      return false;
							    }else if($('#xzlzs select[name="city"]').val()==0){
							      $('.error').show();
							      $('.error').text("请选择城市");
							      return false;
							  	}else  if($('#xzlzs select[name="town"]').val()==0){
							      $('.error').show();
							      $('.error').text("请选择区域！");
							      return false;
							  	}else  if($(' textarea').val()==''){
							      $('.error').show();
							      $('.error').text("请输入店铺介绍！");
							      return false;
							  	}else   if($('input[name="username"]').val()==''){
							      $('.error').show();
							      $('.error').text("请填写客户姓名!");
							      return false;
							  	}else   if($('input[name="phone"]').val().length!=11){
										      $('.error').show();
										      $('.error').text("手机号码为11位！");
										      return false; 	 
							}
						}
			    });        
			})

			//免费发布-写字楼租售  判断必填信息是否为空
           	$(function(){

				$('#zpzs').on('submit',function(){

					if ($('#zpzs .z').css('display')=='block') {
				        if($('#zpzs input[name="title"]').val().length<6){
							    $('.error').show();
						     	$('.error').text("标题不能少于6个字");
							    return false;
								//}else  if($('#syzr input[name="lofo2"]').val()==''){
								//	      $('.error').show();
								//	      $('.error').text("请输入经营业态");
								//	      return false;
								    }else if($('#zpzs select[name="shop2"]').val()==0){
								      $('.error').show();
								      $('.error').text("商铺类型");
								      return false;
								    }
								    else if($('#zpzs input[name="area"]').val()==''){

								      $('.error').show();
								      $('.error').text("请输入面积");
								      return false;
								     
								    }else  if($('#zpzs input[name="price"]').val()==''){
								      $('.error').show();
								      $('.error').text("请输入租金");
								      return false;
								  	
								  	}else if($('#zpzs select[name="province"]').val()==0){

								      $('.error').show();
								      $('.error').text("请选择省份/直辖市！");
								      return false;
								    }else if($('#zpzs select[name="city"]').val()==0){
								      $('.error').show();
								      $('.error').text("请选择城市");
								      return false;
								  	}else  if($('#zpzs select[name="town"]').val()==0){
								      $('.error').show();
								      $('.error').text("请选择区域！");
								      return false;
								  	}else  if($(' textarea').val()==''){
								      $('.error').show();
								      $('.error').text("请输入店铺介绍！");
								      return false;
								  	}else   if($('input[name="username"]').val()==''){
								      $('.error').show();
								      $('.error').text("请填写客户姓名!");
								      return false;
								  	}else  if($('input[name="phone"]').val().length!=11){

											      	$('.error').show();
											      	$('.error').text("手机号码为11位！");
											      	return false;
								  			  
									}
							 				
							}else{
						        if($('#zpzs input[name="title"]').val().length<6){
									    $('.error').show();
								     	$('.error').text("标题不能少于6个字");
									    return false;
										//}else  if($('#syzr input[name="lofo2"]').val()==''){
										//	      $('.error').show();
										//	      $('.error').text("请输入经营业态");
										//	      return false;
										    }else if($('#zpzs select[name="shop2"]').val()==0){
										      $('.error').show();
										      $('.error').text("商铺类型");
										      return false;
										    }
										    else if($('#zpzs input[name="area"]').val()==''){

										      $('.error').show();
										      $('.error').text("请输入面积");
										      return false;
										     
										    }else  if($('#zpzs input[name="sale"]').val()==''){
										      $('.error').show();
										      $('.error').text("请输入售价");
										      return false;
										  	
										  	}else if($('#zpzs select[name="province"]').val()==0){

										      $('.error').show();
										      $('.error').text("请选择省份/直辖市！");
										      return false;
										    }else if($('#zpzs select[name="city"]').val()==0){
										      $('.error').show();
										      $('.error').text("请选择城市");
										      return false;
										  	}else  if($('#zpzs select[name="town"]').val()==0){
										      $('.error').show();
										      $('.error').text("请选择区域！");
										      return false;
										  	}else  if($(' textarea').val()==''){
										      $('.error').show();
										      $('.error').text("请输入店铺介绍！");
										      return false;
										  	}else   if($('input[name="username"]').val()==''){
										      $('.error').show();
										      $('.error').text("请填写客户姓名!");
										      return false;
										  	}else   
										  			if($('input[name="phone"]').val().length!=11){

													      $('.error').show();
													      $('.error').text("手机号码为11位！");
													      return false;
												  	} 
								 

							}
				   });        
			})














/**/
	var  filteritem1on="false";
    var  filteritem2on="false"; 
    var  filteritem3on="false";   
  list('#filter-item1','#list2three1','filteritem1on')
  list('#filter-item2','#list2three2','filteritem2on')
  list('#filter-item3','#list2three3','filteritem3on')  
  function list(a,b,c) {
   
        
    $(a).on("touchstart",function(){
 
      if ( c=="false"){
        $('.list2three').css('display','none')
        $(b).css('display','block')
        var filteritem1on="false";
        var filteritem2on="false"; 
           
        c="true"

      }else{
        $('.list2three').css('display','none')
         c="false";
          
      }
    });   
    }  


















})

