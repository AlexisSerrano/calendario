<template>
	<div>
		<calendar :eventArray="this.eventos" />
	</div>
</template>

<script>
	import {
		Calendar
	} from 'quasar-calendar'
	export default {
		components: {
			'calendar': Calendar
		},
		data() {
			return {
				eventos: [{
						id: 1,
						summary: 'Cita para acuerdo reparatorio',
						description: 'deberan preentarse en la uat',
						location: 'uat fiscalia xalapa',
						start: {
							dateTime: '2018-09-16T14:00:00', // ISO 8601 formatted
						},
						end: {
							dateTime: '2018-09-16T16:30:00',
						},
						color: 'positive',
						attendees: [{
							id: 1,
							email: 'fiscaliaveracruz@correo.com',
							displayName: 'John Q. Public',
							organizer: false,
							self: false,
							resource: false
						}]
					}
				]
			}
		},
	}
</script>

<style scoped>
	
</style>