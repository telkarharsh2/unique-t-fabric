import React, { useState, useRef, useEffect } from 'react';
import { MessageSquareText, Send, X, Bot, User, Truck, MapPin, CreditCard, RefreshCw, Smartphone, ShoppingBag, Phone, Clock, HelpCircle, Package } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './FabricAssistant.css';

const FabricAssistant = () => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    // Initial Greeting
    useEffect(() => {
        if (messages.length === 0) {
            setMessages([{
                id: 1,
                text: t('assistant.greeting'),
                sender: 'bot'
            }]);
        }
    }, [t]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSend = () => {
        if (!inputValue.trim()) return;

        const userMsg = {
            id: Date.now(),
            text: inputValue,
            sender: 'user'
        };

        setMessages(prev => [...prev, userMsg]);
        setInputValue('');
        setIsTyping(true);

        // Simulate AI Response
        setTimeout(() => {
            const botResponse = getBotResponse(userMsg.text);
            setMessages(prev => [...prev, {
                id: Date.now() + 1,
                text: botResponse,
                sender: 'bot'
            }]);
            setIsTyping(false);
        }, 1200);
    };

    const suggestions = [
        { label: 'Products', key: 'products', icon: ShoppingBag },
        { label: 'Delivery', key: 'delivery', icon: Truck },
        { label: 'Location', key: 'location', icon: MapPin },
        { label: 'Payment', key: 'payment', icon: CreditCard },
        { label: 'Returns', key: 'return_policy', icon: RefreshCw },
        { label: 'App', key: 'launch', icon: Smartphone },
        { label: 'Contact', key: 'contact', icon: Phone },
        { label: 'Hours', key: 'hours', icon: Clock },
        { label: 'Bulk', key: 'bulk', icon: Package },
        { label: 'Why Us', key: 'why_us', icon: HelpCircle },
    ];

    const handleChipClick = (key) => {
        const textMap = {
            products: "Show me your products.",
            delivery: "When will I get my delivery?",
            location: "Where is your store located?",
            payment: "What payment methods do you accept?",
            return_policy: "What is your return policy?",
            launch: "When is the app launching?",
            contact: "How can I contact you?",
            hours: "What are your working hours?",
            bulk: "I want to place a bulk order.",
            why_us: "Why should I choose Unique T Fabric?"
        };
        const text = textMap[key];

        // Add user message
        const userMsg = { id: Date.now(), text, sender: 'user' };
        setMessages(prev => [...prev, userMsg]);
        setIsTyping(true);

        // Simulate AI Response
        setTimeout(() => {
            const botResponse = t(`assistant.${key}`); // Direct key mapping for chips
            setMessages(prev => [...prev, { id: Date.now() + 1, text: botResponse, sender: 'bot' }]);
            setIsTyping(false);
        }, 800);
    };

    const getBotResponse = (input) => {
        const lowerInput = input.toLowerCase();

        // Launch / App
        if (lowerInput.includes('launch') || lowerInput.includes('coming soon') || lowerInput.includes('app') || lowerInput.includes('date') || lowerInput.includes('mobile')) {
            return t('assistant.launch');
        }

        // Products / Stock
        if (lowerInput.includes('product') || lowerInput.includes('buy') || lowerInput.includes('collection') || lowerInput.includes('saree') || lowerInput.includes('kurta') || lowerInput.includes('shirt')) {
            return t('assistant.products');
        }

        // Price / Cost
        if (lowerInput.includes('price') || lowerInput.includes('cost') || lowerInput.includes('rate') || lowerInput.includes('money') || lowerInput.includes('how much')) {
            return t('assistant.price');
        }

        // Contact / Support
        if (lowerInput.includes('contact') || lowerInput.includes('mail') || lowerInput.includes('phone') || lowerInput.includes('support') || lowerInput.includes('help') || lowerInput.includes('number')) {
            return t('assistant.contact');
        }

        // Delivery / Shipping
        if (lowerInput.includes('delivery') || lowerInput.includes('ship') || lowerInput.includes('time') || lowerInput.includes('track') || lowerInput.includes('order')) {
            return t('assistant.delivery');
        }

        // Fabric / Quality
        if (lowerInput.includes('fabric') || lowerInput.includes('material') || lowerInput.includes('quality') || lowerInput.includes('cotton') || lowerInput.includes('silk')) {
            return t('assistant.fabric');
        }

        // Location / Address
        if (lowerInput.includes('where') || lowerInput.includes('location') || lowerInput.includes('address') || lowerInput.includes('store') || lowerInput.includes('place') || lowerInput.includes('visit')) {
            return t('assistant.location');
        }

        // Hours / Availability
        if (lowerInput.includes('time') || lowerInput.includes('hour') || lowerInput.includes('open') || lowerInput.includes('close') || lowerInput.includes('working')) {
            return t('assistant.hours');
        }

        // Payment
        if (lowerInput.includes('pay') || lowerInput.includes('card') || lowerInput.includes('upi') || lowerInput.includes('cod') || lowerInput.includes('money')) {
            return t('assistant.payment');
        }

        // Returns / Refund
        if (lowerInput.includes('return') || lowerInput.includes('refund') || lowerInput.includes('exchange') || lowerInput.includes('cancel')) {
            return t('assistant.return_policy');
        }

        // Bulk
        if (lowerInput.includes('bulk') || lowerInput.includes('wholesale') || lowerInput.includes('business') || lowerInput.includes('quantity')) {
            return t('assistant.bulk');
        }

        // Why Us / Trust
        if (lowerInput.includes('why') || lowerInput.includes('trust') || lowerInput.includes('good') || lowerInput.includes('best')) {
            return t('assistant.why_us');
        }

        // Greetings / Identity
        if (lowerInput.includes('hello') || lowerInput.includes('hi') || lowerInput.includes('hey') || lowerInput.includes('morning') || lowerInput.includes('evening')) {
            return t('assistant.greeting');
        }

        if (lowerInput.includes('who are you') || lowerInput.includes('what do you do') || lowerInput.includes('bot')) {
            return t('assistant.about_bot');
        }

        return t('assistant.default');
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') handleSend();
    };

    return (
        <div className="fabric-assistant-container">
            {/* Chat Window */}
            <div className={`assistant-window ${isOpen ? 'open' : ''}`}>
                <div className="assistant-header">
                    <div className="d-flex align-items-center gap-2">
                        <div className="bot-avatar-header">
                            <Bot size={20} color="#fff" />
                        </div>
                        <div>
                            <h6 className="mb-0 fw-bold text-white">{t('assistant.name')}</h6>
                            <span className="online-status">Online</span>
                        </div>
                    </div>
                    <button className="close-chat-btn" onClick={() => setIsOpen(false)}>
                        <X size={18} />
                    </button>
                </div>

                <div className="assistant-body">
                    {messages.map((msg) => (
                        <div key={msg.id} className={`message-bubble ${msg.sender}`}>
                            {msg.sender === 'bot' && (
                                <div className="bot-icon-small">
                                    <Bot size={14} />
                                </div>
                            )}
                            <div className="text-content">
                                {msg.text}
                            </div>
                        </div>
                    ))}
                    {isTyping && (
                        <div className="message-bubble bot typing">
                            <div className="dots">
                                <span></span><span></span><span></span>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Suggestions Chips */}
                <div className="assistant-suggestions">
                    {suggestions.map((chip) => {
                        const Icon = chip.icon;
                        return (
                            <button key={chip.key} className="suggestion-chip" onClick={() => handleChipClick(chip.key)}>
                                <Icon size={14} className="me-1" />
                                {chip.label}
                            </button>
                        );
                    })}
                </div>

                <div className="assistant-footer">
                    <input
                        type="text"
                        placeholder={t('assistant.placeholder')}
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={handleKeyPress}
                    />
                    <button className="send-btn" onClick={handleSend} disabled={!inputValue.trim()}>
                        <Send size={18} />
                    </button>
                </div>
            </div>

            {/* Toggle Button */}
            <button className={`assistant-toggle-btn ${isOpen ? 'hide' : ''}`} onClick={() => setIsOpen(true)}>
                <MessageSquareText size={28} />
                <span className="pulse-ripple"></span>
            </button>
        </div>
    );
};

export default FabricAssistant;
