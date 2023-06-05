import React from "react";

const Icon = ({ name, theme, ...rest }) => {
	const ImportedIconRef = React.useRef(null);
	const [loading, setLoading] = React.useState(false);

	React.useEffect(() => {
		setLoading(true);
		const importIcon = async () => {
			try {
				// ImportedIconRef.current = (await import(`./../assets/images/${name}.svg`)).ReactComponent;
				ImportedIconRef.current = (
					await import(
						`!!@svgr/webpack?-svgo,+titleProp,+ref!../assets/images//${name}.svg`
					)
				).default;
			} catch (err) {
				// Your own error handling logic, throwing error for the sake of
				// simplicity
				throw err;
			} finally {
				setLoading(false);
			}
		};
		importIcon();
	}, [name, theme]);

	if (!loading && ImportedIconRef.current) {
		const { current: ImportedIcon } = ImportedIconRef;
		return <ImportedIcon {...rest} />;
	}

	return null;
};

export default Icon;
