$(function() {
	//全选
	$(".checkall").change(function() {
		$(".j-checkbox,.checkall").prop("checked", $(this).prop("checked"));

		//背景
		if ($(this).prop("checked")) {
			// 所有添加背景
			$(".cart-item").addClass("check-cart-item");
		} else {
			$(".cart-item").removeClass("check-cart-item");
		}
	})
	//单选控制全选
	$(".j-checkbox").change(function() {
		if ($(".j-checkbox:checked").length >= $(".j-checkbox").length) {
			$(".checkall").prop("checked", true)
		} else {
			$(".checkall").prop("checked", false)
		}
		if ($(this).prop("checked")) {
			// 添加背景
			$(this).parents(".cart-item").addClass("check-cart-item");
		} else {
			$(this).parents(".cart-item").removeClass("check-cart-item");
		}
	})

	// 商品数量
	$(".increment").click(function() {
		var n = $(this).siblings(".itxt").val();
		n++;
		$(this).siblings(".itxt").val(n)
		// 商品小计
		var jg = $(this).parents(".p-num").siblings(".p-price").text().substr(1);
		// toFixed(2)保留两位小数
		var price = (jg * n).toFixed(2);
		$(this).parents(".p-num").siblings(".p-sum").text("￥" + price);
		//
		getsum();

	})
	$(".decrement").click(function() {
		if ($(this).siblings(".itxt").val() < 1) {
			$(this).siblings(".itxt").val(1)
		}
		var n = $(this).siblings(".itxt").val();
		if (n == 1) {
			return false;
		}
		n--;
		$(this).siblings(".itxt").val(n)

		var jg = $(this).parents(".p-num").siblings(".p-price").text().substr(1);
		$(this).parents(".p-num").siblings(".p-sum").text("￥" + (jg * n).toFixed(2));
		getsum();
	})

	// 修改文本框值
	$(".itxt").change(function() {
		var n = $(this).val();
		var jg = $(this).parents(".p-num").siblings(".p-price").text().substr(1);
		$(this).parents(".p-num").siblings(".p-sum").text("￥" + (jg * n).toFixed(2));
		getsum();
	})

	//总额
	getsum()

	function getsum() {
		var count = 0;
		var money = 0;
		$(".itxt").each(function(i, ele) {
			count += parseInt($(ele).val());
		})
		$(".amount-sum em").text(count)
		$(".p-sum").each(function(i, ele) {
			money += parseFloat($(ele).text().substr(1))
		})
		$(".price-sum em").text("￥" + money.toFixed(2))
	}

	// 删除商品
	$(".p-action a").click(function() {
		$(this).parents('.cart-item').remove();
		getsum()
	})
	//删除选中
	$(".remove-batch").click(function() {
		$(".j-checkbox:checked").parents('.cart-item').remove();
		getsum()
	})
	//清空
	$(".clear-all").click(function() {
		$(".cart-item").remove();
		getsum()
	})

	// 选定商品添加背景




})
