import style from './style.module.scss';

export default function MBPC({ mobile, pc }: { mobile: React.ReactNode, pc: React.ReactNode }) {

	return (
		<div>
			<div className={style.pc}>
				{pc}
			</div>
			<div className={style.mobile}>
				{mobile}
			</div>
		</div>
	)

}