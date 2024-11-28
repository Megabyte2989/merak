import React from 'react';
import TypingEffect from 'react-typing-effect';

function Typewriter({ text }) {
	return (
		<div>
			<TypingEffect
				text={[text, 'Talent', 'Power']}
				speed={100}
				eraseSpeed={50}
				typingDelay={600}
				eraseDelay={1000}
			/>
		</div>
	);
}

export default Typewriter;
