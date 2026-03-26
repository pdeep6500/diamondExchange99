'use client';
import React from 'react';
import { Box, Container, Typography, Paper, Divider, Stack } from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';
import LockIcon from '@mui/icons-material/Lock';

export default function PrivacyPolicy() {
    return (
        <Box sx={{ bgcolor: '#0b0d17', minHeight: '100vh', py: { xs: 8, md: 12 }, color: '#fff' }}>
            <Container maxWidth="md">
                <Paper
                    elevation={0}
                    sx={{
                        p: { xs: 4, md: 6 },
                        bgcolor: 'rgba(255,255,255,0.02)',
                        borderRadius: 6,
                        border: '1px solid rgba(228, 176, 74, 0.2)',
                        color: '#fff'
                    }}
                >
                    <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 4 }}>
                        <SecurityIcon sx={{ color: '#e4b04a', fontSize: 40 }} />
                        <Typography variant="h3" fontWeight="900" sx={{ color: '#e4b04a' }}>
                            Privacy Policy
                        </Typography>
                    </Stack>

                    <Box sx={{ mb: 6, p: 3, bgcolor: 'rgba(255, 255, 255, 0.05)', borderRadius: 4, display: 'flex', alignItems: 'center', gap: 2 }}>
                        <LockIcon sx={{ color: '#e4b04a' }} />
                        <Typography variant="body1" sx={{ opacity: 0.9 }}>
                            Your privacy and data security are our top priorities. We use military-grade encryption to protect your information.
                        </Typography>
                    </Box>

                    <Stack spacing={4}>
                        <section>
                            <Typography variant="h5" fontWeight="bold" gutterBottom color="#e4b04a">
                                1. Information Collection
                            </Typography>
                            <Typography variant="body1" sx={{ opacity: 0.7, lineHeight: 1.8 }}>
                                We collect information necessary to provide a secure sports analysis experience, including registration details, device information, and transaction history.
                            </Typography>
                        </section>

                        <Divider sx={{ bgcolor: 'rgba(228, 176, 74, 0.1)' }} />

                        <section>
                            <Typography variant="h5" fontWeight="bold" gutterBottom color="#e4b04a">
                                2. Use of Data
                            </Typography>
                            <Typography variant="body1" sx={{ opacity: 0.7, lineHeight: 1.8 }}>
                                Your data is used to:
                                <br />• Provide and improve our services
                                <br />• Verify identity and prevent fraud
                                <br />• Process settlements and withdrawals
                                <br />• Send important platform updates
                            </Typography>
                        </section>

                        <Divider sx={{ bgcolor: 'rgba(228, 176, 74, 0.1)' }} />

                        <section>
                            <Typography variant="h5" fontWeight="bold" gutterBottom color="#e4b04a">
                                3. Data Protection
                            </Typography>
                            <Typography variant="body1" sx={{ opacity: 0.7, lineHeight: 1.8 }}>
                                We implement industry-leading security measures, including SSL encryption and secure firewalls, to protect your personal information from unauthorized access or disclosure.
                            </Typography>
                        </section>

                        <Divider sx={{ bgcolor: 'rgba(228, 176, 74, 0.1)' }} />

                        <section>
                            <Typography variant="h5" fontWeight="bold" gutterBottom color="#e4b04a">
                                4. Third-Party Sharing
                            </Typography>
                            <Typography variant="body1" sx={{ opacity: 0.7, lineHeight: 1.8 }}>
                                We do not sell or rent your personal information to third parties. Data may only be shared with trusted technical partners to ensure platform stability and payment processing, or as required by law.
                            </Typography>
                        </section>

                        <Divider sx={{ bgcolor: 'rgba(228, 176, 74, 0.1)' }} />

                        <section>
                            <Typography variant="h5" fontWeight="bold" gutterBottom color="#e4b04a">
                                5. Cookie Policy
                            </Typography>
                            <Typography variant="body1" sx={{ opacity: 0.7, lineHeight: 1.8 }}>
                                We use cookies to enhance your browsing experience and remember your preferences. You can manage cookie settings through your browser options.
                            </Typography>
                        </section>

                        <Divider sx={{ bgcolor: 'rgba(228, 176, 74, 0.1)' }} />

                        <section>
                            <Typography variant="h5" fontWeight="bold" gutterBottom color="#e4b04a">
                                6. Contact Us
                            </Typography>
                            <Typography variant="body1" sx={{ opacity: 0.7, lineHeight: 1.8 }}>
                                If you have any questions regarding your privacy or data usage, please contact our support team through the official WhatsApp channel.
                            </Typography>
                        </section>
                    </Stack>

                    <Box sx={{ mt: 8, textAlign: 'center', opacity: 0.5 }}>
                        <Typography variant="body2">
                            © 2026 Diamond Exchange99 | Secure Data Architecture
                        </Typography>
                    </Box>
                </Paper>
            </Container>
        </Box>
    );
}
