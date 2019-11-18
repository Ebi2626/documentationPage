	$(document).ready(function(){
		$("#toggle-button").click(function(){
			$("#hide").toggle();
			});
		 $("#fade-button").click(function(){
			$("#fade").fadeToggle();
			});
		$("#fadeTo-button").click(function(){
			$("#fadeTo").fadeTo("slow", 0.5);
			});
			$("#slide-button").click(function(){
				$("#slide").slideToggle();
				});
			$("#animate-button").click(function(){
				$("#animate").animate({opacity: '0.5'}, "slow");
				$("#animate").animate({left: '200px', top: '-30px'}, "slow");
				$("#animate").animate({left: '-200px', top: '-30px'}, "slow");
				$("#animate").animate({left: '200px', top: '30px', opacity: '1'}, "slow");
				$("#animate").animate({left: '-200px', top: '30px'}, "slow");
				$("#animate").animate({left: '200px', top: '-30px'});
				$("#animate").animate({left: '-200px', top: '-30px', opacity: '0.75'});
				$("#animate").animate({left: '200px', top: '30px'});
				$("#animate").animate({left: '-200px', top: '30px'});
				$("#animate").animate({left: '200px', top: '-30px'}, "slow");
				$("#animate").animate({left: '-200px', top: '-30px'}, "slow");
				$("#animate").animate({left: '200px', top: '30px'}, "slow");
				$("#animate").animate({left: '0px', top: '0px'}, "slow");
				$("#animate").animate({opacity: '1'});
			});
			$("#start-button").click(function(){
				$("#stop").fadeToggle(5000);
				});
			$("#stop-button").click(function(){
				$("#stop").stop();
				});
			$("#callback-button").click(function(){
				$("#callback").toggle("slow", function(){
					alert("Element has just toggled");
					});
				});
			$("#chain-button").click(function(){
				$("#chain").css("background-color", "#00028c")
				.slideUp(2500)
				.slideDown(2500)
				.animate({position: 'relative'})
				.animate({left: '-200px', opacity: '0.5'}, 800)
				.animate({left: '0px', opacity: '1'}, 300)
				.animate({left: '-200px', opacity: '0.5'}, 800)
				.animate({left: '0px', opacity: '1'}, 300)
				.animate({left: '-200px', opacity: '0.5'}, 800)
				.animate({left: '0px', opacity: '1'}, 300);
				});
			$("#getText").click(function(){
				alert("Text: "+ $("#gotText").text());
			});
			$("#getHtml").click(function(){
				alert("Text: "+ $("#gotHtml").html());
			});
			$("#getVal").click(function(){
				alert("Text: "+ $("#gotVal").val());
			});
			$("#getAttr").click(function(){
				alert("Text: "+ $("#gotAttr").attr("href"))
			});
			$("#setText").click(function(){
				$("#gotSetText").text("hello world!");
			});
			$("#setHtml").click(function(){
				$("#gotSetHtml").html('<b>hello world!</b>');
			});
			$("#setVal").click(function(){
				$("#gotSetVal").val('Well done!');
			});
			$("#setAttr").click(function(){
				$("#gotSetAttr").attr('href', 'http://www.w3schools.com');
			});
			$("#appendText").click(function(){
				$("#appendedText").append("sunny!");
			});
			$("#prependText").click(function(){
				$("#prependedText").prepend(" long ");
			});
				var ball = "<div class='BALL'></div>";

				$("#afterText").click(function(){
					$("#afteredText").after(ball);
			});
				var stick = "<div class='STICK'></div>";

				$("#beforeText").click(function(){
					$("#beforedText").before(stick);
			});
				$("#removeText").click(function(){
					$("#removedText").remove();
			});
				$("#emptyText").click(function(){
					$("#emptedText").empty();
			});
				$("#addClassText").click(function(){
					$("#addClassBox").addClass("black neon-text");
			});
				$("#removeClassText").click(function(){
					$("#removeClassBox").removeClass("black neon-text");
			});
				$("#toggleClassText").click(function(){
					$("#toggleClassBox").toggleClass("black neon-text");
			});
				$("#cssText").click(function(){
					$("#cssBox").css({"background-color":"brown","color":"black","font-size":"22px"});
			});
				$("#widthText").click(function(){
					alert("Box width=" + $("#widthBox").width() + "px");
			});
				$("#innerHeightText").click(function(){
					alert("Box height (include padding) = " + $("#innerHeightBox").innerHeight() + "px");
			});
				$("#outerWidthText").click(function(){
					alert("Box width (include padding, margin and border) = " + $("#outerWidthBox").outerWidth(true) + "px");
			});
				$("#dimensionText").click(function(){
		  var txt = "";
		  txt += "Document width/height: " + $(document).width();
		  txt += "x" + $(document).height() + "px" + "\n";
		  txt += "Window width/height: " + $(window).width();
		  txt += "x" + $(window).height() + "px";
		  alert(txt);
		});
		$("#parentText").click(function(){
			$("#kid").parent().css({"border-color":"green"});
			});
		$("#parentsText").click(function(){
			$("#kids").parents().css({"border-color":"green"});
			});
		$("#parentsUntilText").click(function(){
			$("#kidsUntil").parentsUntil("li").css({"border-color":"green", "background-color":"blue"});
			});
		$("#childrenText").click(function(){
			$("#descendants").children().css({"background-color":"blue"});
			});
		$("#findText").click(function(){
			$("body").find("li").css({"border":"solid green", "opacity":"0.5"});
			});
		$("#reset").click(function(){
			$("body").find("li").css({"border":"none", "opacity":"1"});
		});
		$("#siblingsText").click(function(){
			$("#firstSibling").siblings().css({"border":"solid red", "opacity":"0.5"});
			});
		$("#nextText").click(function(){
			$("#nextSibling").next().css({"border":"solid red", "opacity":"0.5"});
			});
		$("#prevAllText").click(function(){
			$("#prevAllSibling").prevAll().css({"border":"solid red", "opacity":"0.5"});
			});
		$("#nextUntilText").click(function(){
			$("#nextUntilSibling").nextUntil("#brotherNextUntilSibling").css({"border":"solid red", "opacity":"0.5"});
			});
		$("#firstText").click(function(){
			$("li").first().css("background-color", "blue");
		});
		$("#lastText").click(function(){
			$("p.last").last().css("background-color", "blue");
		});
		$("#eqText").click(function(){
			$("div.this").eq(2).css("background-color", "blue");
		});
		$("#filterText").click(function(){
			$("div").filter(".filter").css("background-color", "blue");
		});
		$("#notText").click(function(){
			$("div").not(".filter").animate({opacity: '0.5'}, "fast");
			$("div").not(".filter").animate({opacity: '0.2'}, "fast");
			$("div").not(".filter").animate({opacity: '0.5'}, "fast");
			$("div").not(".filter").animate({opacity:'1'}, "fast");
			$("div").not(".filter").animate({opacity:'0.5'}, "fast");
			$("div").not(".filter").animate({opacity:'0.2'}, "fast");
			$("div").not(".filter").animate({opacity:'0.5'}, "fast");
			$("div").not(".filter").animate({opacity:'1'}, "fast");
			$("div").not(".filter").animate({opacity:'0.5'}, "fast");
			$("div").not(".filter").animate({opacity:'0.2'}, "fast");
			$("div").not(".filter").animate({opacity:'0.5'}, "fast");
			$("div").not(".filter").animate({opacity:'1'}, "fast");
		});
//Script to menu
				$("#effect1").click(function(){
					$("#submenu1").toggle("slow");
					$("#navbar").mouseleave(function(){
						setTimeout(function(){
						$("#submenu1").hide("slow");
					}, 3000);
						});
					});
				$("#effect2").click(function(){
					$("#submenu2").toggle("slow");
					$("#navbar").mouseleave(function(){
						setTimeout(function(){
						$("#submenu2").hide("slow");
						}, 3000);
						});
					});
				$("#effect3").click(function(){
					$("#submenu3").toggle("slow");
					$("#navbar").mouseleave(function(){
						setTimeout(function(){
						$("#submenu3").hide("slow");
						}, 3000);
						});
					});
				$("#effect4").click(function(){
					$("#submenu4").toggle("slow");
					$("#navbar").mouseleave(function(){
						setTimeout(function(){
						$("#submenu4").hide("slow");
						}, 3000);
						});
					});
				$("#effect5").click(function(){
					$("#submenu5").toggle("slow");
					$("#navbar").mouseleave(function(){
						setTimeout(function(){
							$("#submenu5").hide("slow");
						}, 3000);
						});
					});
				$("#effect6").click(function(){
					$("#submenu6").toggle("slow");
					$("#navbar").mouseleave(function(){
						setTimeout(function(){
							$("#submenu6").hide("slow");
						}, 3000);
						});
					});
				var menuHeight = 640;
				var height = $(document).height();
				if (height > menuHeight) {
					$("#navbar").css("overflow-y", "hidden");
				}
				else {
					$("#navbar").mouseleave(function(){
					setTimeout(function(){
					$("#navbar").css("overflow-y", "hidden");
				}, 1500);
				});
				};

// Script corrects position of blockquotes
				$("blockquote").css({"position":"relative","top":"-5px"});
			var source = "<div class='fut'><a href='http://www.w3schools.com' class='neon-text' target='_blank'>http://www.w3schools.com</a><br><a href='https://jquery.com/' class='neon-text' target='_blank'>https://jquery.com/</a></div>";
				$("#feet").mouseenter(function(){
					$("span").css("visibility", "visible");
				});
			$("#feet").mouseleave(function(){
				$("span").css("visibility","hidden");
			});	
			});		
