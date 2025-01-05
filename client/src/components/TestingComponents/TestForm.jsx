import React from 'react';
import { z } from 'zod';

function TestForm() {
	const schema = z.object({
		name: z.string().min(3, 'enter more than 3 please'),
		email: z
			.string()
			.email()
			.regex(/\w+@(gmail|yahoo).\w{3}/gi, 'Enter valid email'),
		password: z
			.string()
			.min(8, "can't be less tahn 9")
			.regex(/\d/, 'must contain number'),
		age: z.number().min(18).max(60).optional(),
	});

	const data = {
		name: 'John',
		email: 'john.doe@example.com',
		password: 'secure123',
		age: 25,
	};

	const result = schema.safeParse(data);
	return (
		<div>
			<h1>Validation Result</h1>
			{result.success ? (
				<div style={{ color: 'green' }}>
					<p>Validation Passed!</p>
					<pre>{JSON.stringify(result.data, null, 2)}</pre>
				</div>
			) : (
				<div style={{ color: 'red' }}>
					<p>Validation Failed:</p>
					<ul>
						{result.error.errors.map((err, index) => (
							<li key={index}>
								<strong>{err.path.join(' > ')}:</strong> {err.message}
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
}

export default TestForm;
