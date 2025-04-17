const Footer = () => {
  return (
    <footer className="w-full border-t border-border py-8">
      <div className="max-w-3xl mx-auto px-4 flex items-center justify-center">
        <p className="text-xs text-muted-foreground text-center">
          © {new Date().getFullYear()} Amartya Singh
        </p>
      </div>
    </footer>
  );
};

export default Footer;
