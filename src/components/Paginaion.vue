<template>
	<div id="pagination">
		<ul>
			<li @click='changePage(currentPage - 1)'><a><i class="fas fa-angle-double-left"></i></a></li>
			<li @click='changePage(1)' :class='{active: 1 === currentPage}'><a >1</a></li>
			<li v-if='currentPage >= 5 && totalPage >= 8'>
				<a>
					<i class="fas fa-ellipsis-h"></i>
				</a>
			</li>
			<li v-if="i !== 1 && i !== totalPage && ((totalPage > 8 && (currentPage - i <= 2 && i - currentPage <= 2)) || ( i <= 6 && currentPage <=4 ) || ( totalPage - i <= 5 && totalPage - currentPage <= 3 ))" v-for='i in totalPage' @click='changePage(i)' :class='{active: i === currentPage}'>
				<a>{{i}}</a>
			</li>
			<li v-if='totalPage - currentPage > 3 && totalPage >= 8'>
				<a>
					<i class="fas fa-ellipsis-h"></i>
				</a>
			</li>
			<li v-if='totalPage !== 1' @click='changePage(totalPage)' :class='{active: totalPage === currentPage}'>
				<a>
					{{totalPage}}
				</a>
			</li>
			<li @click='changePage(currentPage + 1)'><a ><i class="fas fa-angle-double-right"></i></a></li>
		</ul>
	</div>
</template>

<script>
	export default {
		props: {
			totalPage: Number,
			currentPage: Number
		},
		methods: {
			changePage(to) {
				if(to < 1 || to > this.totalPage) return
				this.$emit('changePage',to)
			}
		}
	}
</script>

<style lang="sass">
@import '../style/paginaion.sass'
</style>
